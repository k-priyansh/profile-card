import ProfileCard from "../components/ProfileCard";

export default function Home() {
  return (
    <ProfileCard
      name="Operative Priyansh"
      title="Cybersecurity Researcher | SOC Analyst | Python Developer"
      location="India"
      role="Security Engineer & Bug Bounty Hunter"
      skills={[ "Network Security", "SOC Analyst", "Pentesting", "Python", "Blockchain"]}
      website="https://khandal.me"
      email="priyansh@khandal.me"
      github="https://github.com/k-priyasnh"
      bugcrowd="https://bugcrowd.com/h/k-priyansh"
      hackerone="https://hackerone.com/k-priyansh"
      avatar="/profile.png"
    />
  );
}
