
import DestinationCard from "@/components/destinationCard";

const DestinationsPage = async () => {
    let destinations = [];
    try {
        const res = await fetch("http://localhost:5000/destinations", { 
            next: { revalidate: 0 },
            cache: "no-store" 
        });
        
        if (res.ok) {
            const data = await res.json();
            destinations = Array.isArray(data) ? data : (data ? [data] : []);
            console.log("Fetched destinations:", destinations.length);
        }
    } catch (error) {
        console.error("Error fetching destinations:", error);
    }

    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    Explore Destinations
                </h1>
                <p className="mt-4 text-lg text-gray-500">
                    Discover your next adventure from our curated list.
                </p>
            </header>

            {destinations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {destinations.map((destination) => (
                        <DestinationCard key={destination._id} destination={destination} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <div className="text-gray-400 mb-4 text-5xl">???</div>
                    <p className="text-gray-600 text-xl font-semibold">No destinations available right now.</p>
                    <p className="text-gray-400 mt-2">The database seems to be empty or the API is unreachable.</p>
                </div>
            )}
        </div>
    );
};

export default DestinationsPage;

