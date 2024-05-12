import { getCollumns } from "@/actions/collumns/getCollumns";
import CardsCollum from "@/components/home/CardsCollum/CardsCollum";

export default async function Home() {
    const collumns = await getCollumns();

    return (
        <div className="min-h-full-without-header max-h-full-without-header flex justify-center gap-5 py-6 overflow-hidden">
            {collumns?.map((collumn) => (
                <CardsCollum key={collumn.id} collumn={collumn} />
            ))}
        </div>
    );
}
