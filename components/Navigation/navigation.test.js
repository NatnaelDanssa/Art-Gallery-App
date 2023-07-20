import { render, screen } from "@testing-library/react";
import { Navigation } from ".";

test("navigation contains home, spotlight and favourites");
render(<Navigation />);
expect(screen.getByText("Home")).toBeInTheDocument();
expect(screen.getByText("Spotlight")).toBeInTheDocument();
expect(screen.getByText("Favourites")).toBeInTheDocument();
