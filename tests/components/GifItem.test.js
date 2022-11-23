
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe("Puebas en <GifItem/>", () => {

    const title = "Saitama";
    const url = "http:/localhost";

    test("Debe hacer match con el snapshot", () => {
        const { container } = render( <GifItem title={ title } url={ url }/>);
        expect( container ).toMatchSnapshot();
    });

    test("Debe mostrar la imagen con el URL y el ALT indicado", () => {
        
        render( <GifItem title={ title } url={ url }/>);
        // screen.debug();

        // expect( screen.getByRole("img").src).toBe( "http://localhost/localhost" );
        // expect( screen.getByRole("img").alt).toBe( title );

        const { src, alt } = screen.getByRole("img");
        expect( src ).toBe( "http://localhost/localhost" );
        expect( alt ).toBe( alt );
    });

    test("Debe mostrar el titulo en el componente", () => {

        render( <GifItem title={ title } url={ url }/>);
        expect( screen.getByText( title ) ).toBeTruthy();
    })
});