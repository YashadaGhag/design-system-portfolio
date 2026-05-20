import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-body-small",
        "text-paragraph-headers-small",
        "text-body-medium",
        "text-body-large",
        "text-h5",
        "text-h4",
        "text-h3",
        "text-h2",
        "text-h1",
      ],
    },
  },
});

/** Utility: merge Tailwind classes safely */
const cn = (...inputs) => twMerge(clsx(inputs));

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Modal — design system overlay primitive.
 *
 * Variants:
 *   information — single body text block + "Close" button (centred).
 *   decision    — title + body + "Cancel" / "Confirm" buttons (right-aligned).
 *
 * Renders via React Portal into document.body to guarantee z-index isolation.
 * ESC key and backdrop click both call onClose.
 *
 * @example
 * // Information
 * <Modal variant="information" isOpen={open} onClose={() => setOpen(false)}>
 *   <p>We'll show 8 jobs daily based on your profile.</p>
 *   <p>The system improves as you apply and make choices.</p>
 * </Modal>
 *
 * @example
 * // Decision — destructive confirm
 * <Modal
 *   variant="decision"
 *   isOpen={open}
 *   title="Delete Job?"
 *   confirmLabel="Delete"
 *   confirmDanger
 *   onConfirm={handleDelete}
 *   onClose={() => setOpen(false)}
 * >
 *   This action cannot be undone.
 * </Modal>
 */
const Modal = ({
  variant = "information",
  isOpen = false,
  onClose,
  onConfirm,
  // Content
  title,
  children,
  body,
  // Button labels
  closeLabel   = "Close",
  confirmLabel = "Confirm",
  cancelLabel  = "Cancel",
  // Danger (red) confirm button — for destructive decisions
  confirmDanger = false,
  className,
}) => {
  const panelRef  = useRef(null);
  const isDecision = variant === "decision";
  const bodyContent = children ?? body;

  // ── ESC closes ────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // ── Prevent body scroll while open ───────────────────────────────
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  // ── Confirm button — switches to error palette when confirmDanger ─
  const confirmClassName = confirmDanger
    ? "bg-error-500 hover:bg-error-600 active:bg-error-700 focus-visible:ring-error-100"
    : "";

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-sp24"
      role="dialog"
      aria-modal="true"
      aria-labelledby={isDecision && title ? "modal-title" : undefined}
    >
      {/* ── Semi-transparent backdrop ──────────────────────────── */}
      <div
        className="absolute inset-0 bg-neutral-900/60 transition-opacity duration-150"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Panel ─────────────────────────────────────────────────
          Figma: white bg, border primary-100, shadow-card, rounded-sm,
          min-h 200 px, w 404 px, padding sp24, gap sp24.
      ──────────────────────────────────────────────────────────── */}
      <div
        ref={panelRef}
        className={cn(
          "relative z-10 flex flex-col gap-sp24",
          "bg-white border border-neutral-100 rounded-sm shadow-card",
          "min-h-[200px] w-[404px] max-w-full p-sp24",
          className
        )}
      >
        {/* ── Body content ──────────────────────────────────────── */}
        <div className="flex flex-col gap-sp16 w-full text-neutral-700">
          {/* Decision: title (body-large, medium) */}
          {isDecision && title && (
            <p
              id="modal-title"
              className="text-body-large font-medium w-full"
            >
              {title}
            </p>
          )}

          {/* Body paragraphs (body-medium, regular) */}
          <div
            className={cn(
              "text-body-medium font-regular w-full",
              !isDecision && "flex flex-col gap-sp16"
            )}
          >
            {bodyContent}
          </div>
        </div>

        {/* ── Action buttons ────────────────────────────────────── */}
        {isDecision ? (
          /* Decision: Cancel (secondary) + Confirm (primary / danger) */
          <div className="flex items-center gap-sp16 justify-center">
            <Button variant="secondary" onClick={onClose}>
              {cancelLabel}
            </Button>
            <Button
              variant="primary"
              onClick={onConfirm}
              className={confirmClassName}
            >
              {confirmLabel}
            </Button>
          </div>
        ) : (
          /* Information: single centred Close button */
          <div className="flex justify-center">
            <Button variant="primary" onClick={onClose}>
              {closeLabel}
            </Button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  /** Visual variant */
  variant: PropTypes.oneOf(["information", "decision"]),
  /** Controls visibility */
  isOpen: PropTypes.bool,
  /** Called on backdrop click, ESC, or Cancel / Close */
  onClose: PropTypes.func,
  /** Called on Confirm button click (decision variant only) */
  onConfirm: PropTypes.func,
  /** Heading text (decision variant only) */
  title: PropTypes.string,
  /** Body content — ReactNode or plain string */
  children: PropTypes.node,
  /** Alternative to children for simple string bodies */
  body: PropTypes.node,
  /** Label for the Information close button */
  closeLabel: PropTypes.string,
  /** Label for the Decision confirm button */
  confirmLabel: PropTypes.string,
  /** Label for the Decision cancel button */
  cancelLabel: PropTypes.string,
  /** Renders the confirm button in red (destructive action) */
  confirmDanger: PropTypes.bool,
  /** Extra Tailwind classes on the panel */
  className: PropTypes.string,
};

export default Modal;
