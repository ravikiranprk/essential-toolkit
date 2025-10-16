import Link from "next/link";

export default function HomeCard({ title, url, currentItems, className, sectionUrl }) {
    return (
        <header className={`${className} rounded-xl shadow-md shadow-cyan-600`}>
            <section>
                <Link href={sectionUrl}>
                    <img src={url} alt={title} className="md:max-w-4/5 w-full rounded-xl" />
                </Link>
            </section>
            <div className="text-gray-950 flex flex-col gap-1 md:max-w-4/5 w-full homecard-text text-center">
                {
                    currentItems.map((item) => (
                        <section key={item.id}>
                            <a href={item.url} className="home-li">{item.name}</a>
                        </section>
                    ))
                }
            </div>
        </header>
    )
}