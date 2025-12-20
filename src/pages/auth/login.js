import LoginModal from "../../components/auth/LoginModal";
import { useRouter } from "next/router";

export default function LoginPage() {
    const router = useRouter();

    // Redirect to home if closed, though typically on a dedicated page closing isn't an option
    const handleClose = () => {
        router.push("/");
    };

    return (
        // Render the modal always open. The modal's CSS (overlay) will handle the background.
        <LoginModal open={true} onClose={handleClose} />
    );
}
