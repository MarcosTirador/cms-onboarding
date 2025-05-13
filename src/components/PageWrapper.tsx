type Props = {
    children: React.ReactNode;
};

export default function PageWrapper({ children }: Props) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="max-w-4xl mx-auto w-full px-4 py-8">
                {children}
            </main>
        </div>
    );
}