import {KeyboardEvent, useEffect, useRef, useState} from "react";

/**
 * =========================
 * UTILS: KEY NAVIGATION (Focus)
 * =========================
 */
export function useArrowKeyNav(count: number, initial = 0) {
    // Gives arrow up/down navigation across focusable elements.
    const [focusIdx, setFocusIdx] = useState(initial);
    const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
    useEffect(() => {
        if (rowRefs.current[focusIdx]) rowRefs.current[focusIdx]?.focus();
        // No-op on blur
    }, [focusIdx, count]);

    function onKeyDown(e: KeyboardEvent) {
        if (e.key === "ArrowDown") {
            setFocusIdx((prev) => (prev + 1) % count);
            e.preventDefault();
        }
        if (e.key === "ArrowUp") {
            setFocusIdx((prev) => (prev - 1 + count) % count);
            e.preventDefault();
        }
        if (e.key === "Home") {
            setFocusIdx(0);
            e.preventDefault();
        }
        if (e.key === "End") {
            setFocusIdx(count - 1);
            e.preventDefault();
        }
    }

    return {focusIdx, setFocusIdx, rowRefs, onKeyDown};
}