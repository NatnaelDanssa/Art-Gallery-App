import { render, screen } from "@testing-library/react";
import { ArtPiecePreview } from ".";

test("image preview contains an image, author and title", async () => {
  // ARRANGE
  render(
    <ArtPiecePreview
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      title="Orange Red and Green Abstract Painting"
      artist="Steve Johnson"
    />
  );
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(
    screen.getByText("Orange Red and Green Abstract Painting")
  ).toBeInTheDocument();
  expect(screen.getByText("Steve Johnson")).toBeInTheDocument();
});
