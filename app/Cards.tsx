export default function Cards({ cards, height = 150 }: Readonly<{
  cards: string[];
  height: number
}>) {
    return (
        <>
            <h1 style={{
                fontSize: "30px",
                textShadow: "none",
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "white",
                WebkitTextStroke: "none",
                letterSpacing: "initial",
                marginTop: "20px",
                fontStyle: "italic"
            }}>Performance & Native</h1>
            <section style={{
                width: "100%",
                // height: height + "px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                flexGrow: 0,
                flexShrink: "unset",
                justifyContent: "center",
                overflow: "hidden",
                alignItems: "center",
                gap: "20px",
                margin: "20px 0px",
            }}>
                {
                    cards.map((e, i, a) => <article style={{
                        border: "solid 1px grey",
                        backgroundColor: "#ffffff13",
                        borderRadius: "10px",
                        minWidth: "450px",
                        maxWidth: "450px",
                        height: height + "px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: 1 - Math.sqrt(Math.pow(i - (a.length * 0.5 - 0.5), 2)) / 3
                    }}><p style={{
                        fontSize: "20px",
                        textAlign: "justify",
                        margin: "30px 30px"
                    }}>"{e}"</p></article>)
                }
            </section>
        </>
    );
}