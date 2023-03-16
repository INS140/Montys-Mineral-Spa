

export default function Packages({ packages }) {
    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {
                        packages.map(p => {
                            return <li>{p}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}