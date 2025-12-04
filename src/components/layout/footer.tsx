export default function Footer() {
    return (
        // <footer className="w-full px-4">


        //     <div className="mr-auto">
        //         <div>Fred Howden</div>

        //         <div>Email</div>
        //         <div>fredhhowden@gmail.com</div>

        //         <div>Linked In</div>
        //         <div>https://www.linkedin.com/in/fred-howden-397b74252/</div>

        //         <div>Github</div>
        //         <div>https://github.com/FredHowden/</div>
        //     </div>
        //     {/* <div>select language</div> */}
        //     <div className="my-1 text-center">made by Fred Howden</div>
        // </footer>

        <footer className="w-full bg-gray-200 text-gray-900 px-6 py-8">
            <div className="max-w-6xl mx-auto flex flex-col justify-between gap-8">
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold">Fred Howden</h2>

                    <div>
                        <p className="font-medium">Email:</p>
                        <a
                            href="mailto:fredhhowden@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            fredhhowden@gmail.com
                        </a>
                    </div>

                    <div>
                        <p className="font-medium">LinkedIn:</p>
                        <a
                            href="https://www.linkedin.com/in/fred-howden-397b74252/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            linkedin.com/in/fred-howden-397b74252
                        </a>
                    </div>

                    <div>
                        <p className="font-medium">GitHub:</p>
                        <a
                            href="https://github.com/FredHowden/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            github.com/FredHowden
                        </a>
                    </div>
                </div>

                <div className="text-center text-gray-400 text-sm">
                    Made by Fred Howden
                </div>
            </div>
        </footer>

    );
}
