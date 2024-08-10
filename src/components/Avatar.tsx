import AvatarCircles from "@/components/magicui/avatar-circles";

const avatarUrls = [
    "https://media.licdn.com/dms/image/v2/C5103AQEYGYbCvzOygQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516567868942?e=2147483647&v=beta&t=6UixvvR28hgR1AO4WoQhqSMptckOauCe336Ttlguaiw",
];

export function AvatarCirclesDemo() {
    return <AvatarCircles className="h-16 w-16" numPeople={1} avatarUrls={avatarUrls} />;
}
