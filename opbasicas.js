const fieldsetContenedor = document.querySelector("fieldset")



const IMG = "https://4.bp.blogspot.com/-jUAfM44GU04/T4z3AmWbx7I/AAAAAAAALTM/gMWjNlm1iyE/s1600/boca-juniors-1.jpg";




function agregarsigimg() {

    fieldsetContenedor.innerHTML += `

        <img src="${IMG}" alt="test">
    `;
}



