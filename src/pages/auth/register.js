import RegisterModal from "../../components/auth/RegisterModal";
import { useRouter } from "next/router";

export default function RegisterPage() {
    const router = useRouter();

    const handleClose = () => {
        router.push("/");
    };

    return (
        <RegisterModal open={true} onClose={handleClose} />
    );
}
