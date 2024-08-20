import Head from "./Head";
import TeamCard from "./TeamCard";

export default function Team() {
    return (
        <div>
            <Head title="Team" heading="Get Quality Education" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <TeamCard image="images/team-member-1.jpeg" name="Julian Jameson" job="Profession" />
                <TeamCard image="images/team-member-2.jpeg" name="Julian Jameson" job="Profession" />
                <TeamCard image="images/team-member-1.jpeg" name="Julian Jameson" job="Profession" />
                <TeamCard image="images/team-member-2.jpeg" name="Julian Jameson" job="Profession" />
            </div>
        </div>
    )
}