import { Navigation } from "./Navigation";

const navItems = [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
    {label: "About", href: "/about"},
    {label: "Todo", href: "/todo"},
    {label: "Sing up", href: "/auth"},
]

export const TheHeader = () => {
    return (
        <header className="container">
           <Navigation navLinks={navItems}/>
        </header>
    )
}