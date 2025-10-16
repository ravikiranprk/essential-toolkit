import { calculators, converters, counters, generators } from "@/constants";

export default function Footer() {
    return (
        <footer className="sm:px-10 p-4 py-6 flex flex-col gap-5 justify-center bg-gray-700 text-zinc-50">
            {/* Useful links */}
            <div className="flex flex-col md:flex-row gap-4 md:justify-between items-center md:items-start justify-center">
                {/* calculators */}
                <div className="flex flex-col gap-2">
                    <h3 className="footer-header md:font-2xl font-semibold">Calculators</h3>
                    <ul>
                        {
                            calculators.map((item) => (
                                <li key={item.id}><a href={item.url}>{item.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                {/* converters */}
                <div className="flex flex-col gap-2">
                    <h3 className="footer-header md:font-2xl font-semibold">Converters</h3>
                    <ul>
                        {
                            converters.map((item) => (
                                <li key={item.id}><a href={item.url}>{item.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                {/* counters */}
                <div className="flex flex-col gap-2">
                    <h3 className="footer-header md:font-2xl font-semibold">Counters</h3>
                    <ul>
                        {
                            counters.map((item) => (
                                <li key={item.id}><a href={item.url}>{item.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                {/* generators */}
                <div className="flex flex-col gap-2">
                    <h3 className="footer-header md:font-2xl font-semibold">Generators</h3>
                    <ul>
                        {
                            generators.map((item) => (
                                <li key={item.id}><a href={item.url}>{item.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <br />
            <hr />
            <p className="flex items-center justify-center">
                &copy; Essential Toolkit @ {new Date().getFullYear()}. All rights reserved.
            </p>
        </footer>
    )
}