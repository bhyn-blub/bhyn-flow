export default function BackgroundGrid() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 opacity-20"
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                rgba(99, 102, 241, 0.08) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(236, 72, 153, 0.06) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "32px 32px",
                    }}
                    />
            </div>
    );
}