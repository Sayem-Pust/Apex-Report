import React, { useEffect, useState, ReactNode, useRef } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const modalWrapperRef = useRef<HTMLDivElement | null>(null);

    const backDropHandler = (e: MouseEvent) => {
        if (modalWrapperRef.current && !modalWrapperRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    useEffect(() => {
        setIsBrowser(true);
        window.addEventListener("click", backDropHandler);
        return () => window.removeEventListener("click", backDropHandler);
    }, []);

    if (!isBrowser) {
        return null;
    }

    const modalContent = (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
                ref={modalWrapperRef}
                className="bg-white w-[500px] h-[600px] rounded-lg p-4"
            >
                <div className="flex justify-end text-2xl">
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        onClose();
                    }}>
                        x
                    </a>
                </div>
                {title && <div className="text-lg font-bold mt-2">{title}</div>}
                <div className="pt-2">{children}</div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default Modal;
