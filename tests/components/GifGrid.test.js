import { render, screen } from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( "../../src/hooks/useFetchGifs" );


describe("Purebas en GifGrid", () => {

    test("Debe retornar un arreglo de gifs", async() => {
        const gifs = await getGifs("One Punch");
        
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });


    const category = "One Punch";

    test("Debe mostrar el loading inciialmente", () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render( <GifGrid category={ category } />);

        expect( screen.getByText( "Cargando..." ) );
        expect( screen.getByText( category ) );
    });

    test("Debe de mostrar imagenes cuando se cargan las imágenes useFetchGifs", () => {
       
        const gifs = [
            {
                id: "ABC",
                title: "Saitama",
                url: "https:/localhost/saitama.jpg"
            },
            {
                id: "123",
                title: "Goku",
                url: "https:/localhost/Goku.jpg"
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render( <GifGrid category={ category } />); 
        expect( screen.getAllByRole("img").length ).toBe(2);
    });


});