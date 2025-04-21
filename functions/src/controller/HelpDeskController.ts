import * as logger from "firebase-functions/logger"
import HelpDeskService from "../service/HelpDeskService";

const handleHelpDeskRequest = async (req: any, res: any, helpDeskId: string) => {
    try {
        logger.log("Help Desk Request");
        console.log("", req.body)
        const {method, body} = req;

        switch (method) {
            case 'POST':
                console.log("POST Request", req.body)
                return HelpDeskService.processHelpDeskRequest(body.message, helpDeskId || "no help disk id?").then((helpDeskResp) => {
                    return res.status(200).send({helpDeskResp})
                }).catch((e) => {
                    return res.status(400).send({error: 'Error processing help desk request', details: e});
                });
            default:
                return res.status(405).send({error: 'Method Not Allowed'});
        }
    } catch (err) {
        logger.error("An error occurred", err);
        return res.status(500).send({error: 'Internal Server Error'});
    }
}

export default {handleHelpDeskRequest};
