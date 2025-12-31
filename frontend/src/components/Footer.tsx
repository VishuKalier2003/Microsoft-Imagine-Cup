import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background-dark py-8 text-center text-sm text-gray-500">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
                <div className="flex flex-col items-center sm:items-start">
                    <p>&copy; 2024 Sentinel. All rights reserved.</p>
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
                        Sentinel is a global health intelligence platform dedicated to real-time pandemic surveillance and personal health optimization.
                    </p>
                </div>
                <div className="flex gap-6">
                    <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link to="#" className="hover:text-white transition-colors">Support</Link>
                </div>
            </div>
        </footer>
    );
}
