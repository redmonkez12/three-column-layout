import { Card } from "@/components/card";

export default function Home() {
    return (
        <main className={"px-6 py-[88px] flex flex-col lg:flex-row"}>
            <Card title={"sedans"}
                  text={"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."}
                  icon={"icon-sedans.svg"}
                  variant={"orange"}
            />
            <Card title={"suvs"}
                  text={"Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."}
                  icon={"icon-suvs.svg"}
                  variant={"green"}
            />
            <Card title={"luxury"}
                  text={"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "}
                  icon={"icon-luxury.svg"}
                  variant={"dark-green"}
            />
        </main>
    )
}
