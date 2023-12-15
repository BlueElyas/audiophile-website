type BackdropProps = {
    onClick: () => void
}

export const Backdrop = ( { onClick } : BackdropProps ) => (
    <div
        className="fixed inset-0 bg-black bg-opacity-40 z-50"
        onClick={onClick}>
    </div>
)