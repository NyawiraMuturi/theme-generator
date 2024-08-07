
import Navbar from "@/components/custom/layout/navbar"


const Landing = () => {
    return (
        <div className="py-4 px-6">
            <Navbar />
            <section className="flex flex-row justify-between items-center">
                <div>
                    <h1>Theming got easier. Get your colors right even without a designer</h1>
                    <p>See how different colors will work on your UI</p>
                    <button>Playground</button>
                </div>
                <div>

                </div>
            </section>
        </div>
    )
}

export default Landing
