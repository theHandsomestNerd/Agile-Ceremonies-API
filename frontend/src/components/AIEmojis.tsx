export const emojiAssets = [
    {
        id: "smile_1",
        name: "Smiling Face",
        category: "Positive",
        emotion: "happy",
        description: "A classic warm smile with rosy cheeks and glassy shine.",
        designer: "Josh",
        tags: ["smile", "happy", "positive", "default", "friendly"],
        svg: (
            // Josh/J&T: Classic yellow, glass highlight, unique gradient & glow
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Smiling face emoji"
            >
                <defs>
                    <radialGradient
                        id="grad_smile_1"
                        cx="50%"
                        cy="50%"
                        r="80%"
                        gradientTransform="matrix(1 0 0 0.85 0 0.07)"
                    >
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="90%" stopColor="#f9d423" />
                        <stop offset="100%" stopColor="#fac850" />
                    </radialGradient>
                    <linearGradient
                        id="shine_smile_1"
                        x1="25%"
                        y1="10%"
                        x2="65%"
                        y2="65%"
                    >
                        <stop offset="0%" stopColor="#fff" stopOpacity={0.75} />
                        <stop offset="85%" stopColor="#fff" stopOpacity={0.02} />
                    </linearGradient>
                </defs>
                {/* Circle base */}
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_smile_1)"
                    stroke="#efa900"
                    strokeWidth={2.5}
                />
                {/* Glassy highlight */}
                <ellipse
                    cx={24}
                    cy={21}
                    rx={10}
                    ry={5.9}
                    fill="url(#shine_smile_1)"
                    opacity={0.62}
                />
                {/* Rosy cheeks */}
                <ellipse
                    cx={20.7}
                    cy={38.3}
                    rx={3.2}
                    ry={1.7}
                    fill="#f472b6"
                    fillOpacity={0.35}
                />
                <ellipse
                    cx={39.3}
                    cy={38.3}
                    rx={3.2}
                    ry={1.7}
                    fill="#f472b6"
                    fillOpacity={0.35}
                />
                {/* Smile line */}
                <path
                    d="M21.5 36C23.8 40 36.2 40 38.5 36"
                    stroke="#7c3aed"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    fill="none"
                />
                {/* Eyes */}
                <ellipse cx={22.7} cy={28.5} rx={2.2} ry={2.8} fill="#232337" />
                <ellipse cx={37.3} cy={28.5} rx={2.2} ry={2.8} fill="#232337" />
            </svg>
        ),
    },
    {
        id: "laugh_2",
        name: "Laugh Out Loud",
        category: "Joy",
        emotion: "laugh",
        description: "A big beaming face with squinty eyes and a grinning mouth.",
        designer: "Josh",
        tags: ["laugh", "joy", "grin", "silly", "haha"],
        svg: (
            // Josh/J&T: Exaggerated smile, violet/blue shadow, theme harmony
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Laughing face emoji"
            >
                <defs>
                    <radialGradient
                        id="grad_laugh_2"
                        cx="55%"
                        cy="52%"
                        r="85%"
                        gradientTransform="matrix(1 0 0 0.82 0 0.08)"
                    >
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="95%" stopColor="#e9b000" />
                        <stop offset="100%" stopColor="#ffd900" />
                    </radialGradient>
                    <linearGradient
                        id="mouth_laugh_2"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                </defs>
                {/* Main face */}
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_laugh_2)"
                    stroke="#efa900"
                    strokeWidth={2.2}
                />
                {/* Mouth */}
                <ellipse
                    cx={30}
                    cy={38.6}
                    rx={11}
                    ry={7.7}
                    fill="url(#mouth_laugh_2)"
                />
                <ellipse cx={30} cy={38.6} rx={8.7} ry={5.6} fill="#fff" />
                {/* Squint eyes */}
                <path
                    d="M21.5 27.7c2 1.2 4.8 0.6 6.2-0.9"
                    stroke="#232337"
                    strokeWidth={2.1}
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M32.3 26.8c1.4 1.6 4.6 2.1 6.1 0.2"
                    stroke="#232337"
                    strokeWidth={2.1}
                    strokeLinecap="round"
                    fill="none"
                />
                {/* Cheeks */}
                <ellipse
                    cx={18.8}
                    cy={35.8}
                    rx={2.5}
                    ry={1.2}
                    fill="#f472b6"
                    fillOpacity={0.36}
                />
                <ellipse
                    cx={41.2}
                    cy={35.8}
                    rx={2.5}
                    ry={1.2}
                    fill="#f472b6"
                    fillOpacity={0.36}
                />
            </svg>
        ),
    },
    {
        id: "wink_3",
        name: "Winking",
        category: "Playful",
        emotion: "wink",
        description: "A cheeky wink with a playful smile and a purple highlight.",
        designer: "Josh",
        tags: ["wink", "playful", "flirty", "fun", "cheeky"],
        svg: (
            // Josh: Unique highlight, glassy effect, strong outline contrast
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Winking face emoji"
            >
                <defs>
                    <radialGradient id="grad_wink_3" cx="50%" cy="48%" r="80%">
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="100%" stopColor="#f472b6" />
                    </radialGradient>
                    <linearGradient id="shine_wink_3" x1="0%" y1="0%" x2="80%" y2="50%">
                        <stop offset="0%" stopColor="#fff" stopOpacity={0.63} />
                        <stop offset="90%" stopColor="#fff" stopOpacity={0.01} />
                    </linearGradient>
                </defs>
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_wink_3)"
                    stroke="#a78bfa"
                    strokeWidth={2.2}
                />
                <ellipse
                    cx={25}
                    cy={21}
                    rx={9.2}
                    ry={4.2}
                    fill="url(#shine_wink_3)"
                    opacity={0.58}
                />
                <ellipse cx={38.4} cy={30.9} rx={2.4} ry={2.8} fill="#232337" />
                <path
                    d="M19 29.5c3-2.6 6-0.2 7.2 1.4"
                    stroke="#232337"
                    strokeWidth={2.12}
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M23.7 39.1Q30 44 36.3 39.1"
                    stroke="#7c3aed"
                    strokeWidth={2.07}
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
        ),
    },
    {
        id: "surprise_4",
        name: "Surprised",
        category: "Expression",
        emotion: "surprised",
        description:
            "Wide-eyed, with a little 'O' mouth, showing pleasant surprise.",
        designer: "Josh",
        tags: ["surprise", "wow", "shock", "astonished", "face"],
        svg: (
            // Big eyes, small mouth, blue glow, clear gradient structure
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Surprised face emoji"
            >
                <defs>
                    <radialGradient id="grad_surprise_4" cx="50%" cy="58%" r="90%">
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="100%" stopColor="#38bdf8" />
                    </radialGradient>
                </defs>
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_surprise_4)"
                    stroke="#38bdf8"
                    strokeWidth={2.35}
                />
                <ellipse cx={21.4} cy={28.2} rx={2.55} ry={4.2} fill="#232337" />
                <ellipse cx={38.6} cy={28.2} rx={2.55} ry={4.2} fill="#232337" />
                <ellipse
                    cx={30}
                    cy={39.9}
                    rx={3.2}
                    ry={2.7}
                    fill="#f9f7f1"
                    stroke="#a78bfa"
                    strokeWidth={1.1}
                />
                <circle cx={30} cy={39.9} r={1.3} fill="#232337" />
            </svg>
        ),
    },
    {
        id: "neutral_5",
        name: "Neutral",
        category: "Neutral",
        emotion: "neutral",
        description: "A calm, neutral face for when words aren't enough.",
        designer: "Josh",
        tags: ["neutral", "meh", "blank", "expressionless", "face"],
        svg: (
            // Subtle shadow & highlight, clean lines,
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Neutral face emoji"
            >
                <defs>
                    <radialGradient id="grad_neutral_5" cx="54%" cy="55%" r="85%">
                        <stop offset="0%" stopColor="#fee099" />
                        <stop offset="100%" stopColor="#ffc963" />
                    </radialGradient>
                </defs>
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_neutral_5)"
                    stroke="#fac850"
                    strokeWidth={2.2}
                />
                <ellipse cx={22.4} cy={28.2} rx={2.23} ry={2.44} fill="#232337" />
                <ellipse cx={37.6} cy={28.2} rx={2.23} ry={2.44} fill="#232337" />
                <rect x={23} y={38} width={13.8} height={2.1} rx={1.0} fill="#7c3aed" />
            </svg>
        ),
    },
    {
        id: "sad_6",
        name: "Sad",
        category: "Negative",
        emotion: "sad",
        description: "A small frown with gentle tear drop, outlined for clarity.",
        designer: "Josh",
        tags: ["sad", "frown", "tear", "emotion", "negative"],
        svg: (
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Sad face emoji"
            >
                <defs>
                    <radialGradient id="grad_sad_6" cx="48%" cy="60%" r="92%">
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="100%" stopColor="#fcc5d6" />
                    </radialGradient>
                    <linearGradient id="tear_sad_6" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#a4ecf7" />
                    </linearGradient>
                </defs>
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_sad_6)"
                    stroke="#de5b8f"
                    strokeWidth={2.3}
                />
                <ellipse cx={22.8} cy={29.8} rx={2.2} ry={2.8} fill="#232337" />
                <ellipse cx={37.2} cy={29.8} rx={2.2} ry={2.8} fill="#232337" />
                {/* Frown */}
                <path
                    d="M38.2 38c-2.2-2.3-14.2-2.3-16.4 0"
                    stroke="#7c3aed"
                    strokeWidth={2}
                    strokeLinecap="round"
                    fill="none"
                />
                {/* Tear */}
                <ellipse
                    cx={39.7}
                    cy={37.6}
                    rx={1.07}
                    ry={2.39}
                    fill="url(#tear_sad_6)"
                    opacity={0.6}
                />
            </svg>
        ),
    },
    {
        id: "angry_7",
        name: "Angry",
        category: "Emotion",
        emotion: "angry",
        description: "Crimson brows and a dark frown, deep purple edge.",
        designer: "Josh",
        tags: ["angry", "frustrated", "mad", "face", "crimson"],
        svg: (
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Angry face emoji"
            >
                <defs>
                    <radialGradient id="grad_angry_7" cx="52%" cy="52%" r="80%">
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="100%" stopColor="#f472b6" />
                    </radialGradient>
                </defs>
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_angry_7)"
                    stroke="#bb1c52"
                    strokeWidth={2.3}
                />
                {/* Eyes */}
                <ellipse cx={22.7} cy={29.9} rx={2.3} ry={2.8} fill="#232337" />
                <ellipse cx={37.3} cy={29.9} rx={2.3} ry={2.8} fill="#232337" />
                {/* Eyebrows */}
                <path
                    d="M18 25.1 Q24 22 28 26"
                    stroke="#bb1c52"
                    strokeWidth={1.7}
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M33 26 Q36 22 42 25"
                    stroke="#bb1c52"
                    strokeWidth={1.7}
                    strokeLinecap="round"
                    fill="none"
                />
                {/* Frown */}
                <path
                    d="M24.5 39c4 3.5 11 3.5 15 0"
                    stroke="#7c3aed"
                    strokeWidth={2}
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
        ),
    },
    {
        id: "love_8",
        name: "Heart Eyes",
        category: "Affection",
        emotion: "love",
        description: "Classic heart-eyes, vibrant gradient, a pink bokeh accent.",
        designer: "Josh",
        tags: ["love", "heart-eyes", "romance", "adore", "cute"],
        svg: (
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Heart eyes face emoji"
            >
                <defs>
                    <radialGradient id="grad_love_8" cx="53%" cy="50%" r="90%">
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="70%" stopColor="#f472b6" />
                        <stop offset="100%" stopColor="#e04991" />
                    </radialGradient>
                </defs>
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_love_8)"
                    stroke="#f472b6"
                    strokeWidth={2.4}
                />
                {/* Heart eyes */}
                <path
                    d="M19.7 28.2a2.6 2.6 0 0 1 4.2-2c1.4 1.25 0.3 4.3-1.98 5.6-2.3-1.3-3.4-4.0-2.22-5.6z"
                    fill="#f472b6"
                />
                <path
                    d="M40.3 28.2a2.6 2.6 0 0 0-4.2-2c-1.4 1.25-0.3 4.3 1.98 5.6 2.3-1.3 3.4-4.0 2.22-5.6z"
                    fill="#f472b6"
                />
                {/* Smile */}
                <path
                    d="M24.1 39c6 4.3 11.9 0.7 12-0.01"
                    stroke="#a78bfa"
                    strokeWidth={2.05}
                    strokeLinecap="round"
                    fill="none"
                />
                {/* Bokeh accent */}
                <ellipse cx={35} cy={15} rx={5.8} ry={2} fill="#fff" opacity={0.18} />
            </svg>
        ),
    },
    {
        id: "cool_9",
        name: "Cool (Sunglasses)",
        category: "Attitude",
        emotion: "cool",
        description: "Wearing purple shades; smile with confident curve.",
        designer: "Josh",
        tags: ["cool", "sunglasses", "attitude", "swag", "vibes"],
        svg: (
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Cool face with sunglasses emoji"
            >
                <defs>
                    <radialGradient id="grad_cool_9" cx="50%" cy="55%" r="87%">
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="98%" stopColor="#7c3aed" />
                    </radialGradient>
                    <linearGradient
                        id="sunglasses_cool_9"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="65%"
                    >
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#18181b" />
                    </linearGradient>
                </defs>
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_cool_9)"
                    stroke="#7c3aed"
                    strokeWidth={2.2}
                />
                {/* Glasses */}
                <rect
                    x={16}
                    y={26}
                    rx={4.1}
                    width={12.6}
                    height={7.7}
                    fill="url(#sunglasses_cool_9)"
                />
                <rect
                    x={31.4}
                    y={26}
                    rx={4.1}
                    width={12.6}
                    height={7.7}
                    fill="url(#sunglasses_cool_9)"
                />
                <rect
                    x={28.6}
                    y={29.2}
                    rx={1.15}
                    width={2.8}
                    height={2}
                    fill="#232337"
                />
                {/* Smile */}
                <path
                    d="M23.1 40c4.5 3.2 11.4 3.2 15.8 0"
                    stroke="#232337"
                    strokeWidth={2.3}
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
        ),
    },
    {
        id: "sleepy_10",
        name: "Sleepy",
        category: "State",
        emotion: "sleepy",
        description: "Closed eyes with a gentle mouth and blue bokeh effect.",
        designer: "Josh",
        tags: ["sleepy", "tired", "rest", "snore", "face"],
        svg: (
            // Closed eyes, blue-green gradient, sparkle hint
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Sleepy face emoji"
            >
                <defs>
                    <radialGradient id="grad_sleepy_10" cx="57%" cy="60%" r="87%">
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="98%" stopColor="#38bdf8" />
                    </radialGradient>
                </defs>
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_sleepy_10)"
                    stroke="#38bdf8"
                    strokeWidth={2.2}
                />
                {/* Closed eyes */}
                <path
                    d="M19.5 30.9Q25 28 29.3 32.8"
                    stroke="#232337"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    fill="none"
                />
                <path
                    d="M34 32.7Q38.8 28.1 42.3 30.9"
                    stroke="#232337"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    fill="none"
                />
                {/* Sleep mouth */}
                <ellipse cx={30} cy={41} rx={4.1} ry={1.5} fill="#7c3aed" />
                {/* Zzz accent */}
                <text
                    x={44}
                    y={14}
                    fontFamily="Inter, Arial,sans-serif"
                    fontSize="7"
                    fontWeight={700}
                    fill="#38bdf8"
                    opacity="0.5"
                >
                    Z
                </text>
            </svg>
        ),
    },
    {
        id: "blush_11",
        name: "Blushing",
        category: "Shy",
        emotion: "blush",
        description: "Soft pink cheeks, lowered gaze, and delicate theme shine.",
        designer: "Josh",
        tags: ["blush", "shy", "bashful", "cute", "gentle"],
        svg: (
            <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                role="img"
                aria-label="Blushing face emoji"
            >
                <defs>
                    <radialGradient id="grad_blush_11" cx="56%" cy="51%" r="82%">
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="100%" stopColor="#f472b6" />
                    </radialGradient>
                </defs>
                <circle
                    cx={30}
                    cy={30}
                    r={26}
                    fill="url(#grad_blush_11)"
                    stroke="#f472b6"
                    strokeWidth={2.2}
                />
                {/* Eyes downward */}
                <ellipse cx={23.2} cy={31.8} rx={2.1} ry={1.4} fill="#232337" />
                <ellipse cx={36.8} cy={31.8} rx={2.1} ry={1.4} fill="#232337" />
                {/* Cheeks */}
                <ellipse
                    cx={19.7}
                    cy={37.9}
                    rx={3.0}
                    ry={1.6}
                    fill="#f472b6"
                    fillOpacity={0.45}
                />
                <ellipse
                    cx={40.3}
                    cy={37.9}
                    rx={3.0}
                    ry={1.6}
                    fill="#f472b6"
                    fillOpacity={0.45}
                />
                {/* Mouth */}
                <path
                    d="M23 40.7 Q30 44.6 37 40.7"
                    stroke="#a78bfa"
                    strokeWidth={2.15}
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
        ),
    },
];
