import H1 from "@material-tailwind/react/Heading1";
import Button from "../component/homepage/Button";

const NotFound = () => (
    <div className="mt-64 mb-96 text-center">
        <H1 className="text-center">404 Error : Not Found</H1>
        <Button url="/" title="Kembali Ke Home" />
    </div>
);

export default NotFound;