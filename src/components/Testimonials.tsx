import Head from "./Head";
import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials() {
    return (
        <>
            <Head title="Testimonials" heading="Watch our Courses" />
            <div className="flex flex-col justify-evenly sm:flex-row gap-4">
                <TestimonialsCard image="./images/feedback.jpeg" rating={4} name="Regina Miles" job="Designer" >Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</TestimonialsCard>
                <TestimonialsCard image="./images/feedback.jpeg" rating={4} name="Regina Miles" job="Designer" >Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</TestimonialsCard>

            </div>
        </>

    )
}