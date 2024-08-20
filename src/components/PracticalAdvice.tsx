import Head from "./Head";
import ProductCard from "./ProductCard";

export default function PracticalAdvice() {
    return (
        <>
            <Head title="Practical Advice" heading="Approdable Packages"/>
            <div className="flex flex-col xl:flex-row gap-8 items-center pt-16">

                <ProductCard title="2,769 online courses" heading="Watch our Courses" image="./images/project-cover.jpeg" />
                <ProductCard title="Lifetime access" heading="Our Experts Teacher" image="./images/project-cover-2.jpeg" />
            </div>
        </>
    )
}