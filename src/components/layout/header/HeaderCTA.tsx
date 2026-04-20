import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";

interface HeaderCTAProps {
  mobile?: boolean;
  onClick?: () => void;
}

export function HeaderCTA({ mobile = false, onClick }: HeaderCTAProps) {
  if (mobile) {
    return (
      <Link to="/contato" className="block w-full" onClick={onClick}>
        <Button size="lg" className="w-full">
          Solicitar Orçamento
        </Button>
      </Link>
    );
  }

  return (
    <div className="hidden lg:flex items-center">
      <Link to="/contato">
        <Button size="sm">
          Solicitar Orçamento
        </Button>
      </Link>
    </div>
  );
}
