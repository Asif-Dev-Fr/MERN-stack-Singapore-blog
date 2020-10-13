import React from 'react'

const Contact = () => {
    return(
        <div class="center contact">

    		<h1 class="title-center"> Contactez-nous si vous avez une question ou une remarque</h1>
 
			<p><i> Tous les champs sont obligatoires </i></p>
			<div class="row">
				<div class="form-group col-12 col-sm-12 col-md-12 col-lg-4">
					<input type="text" name="nom" placeholder="Nom" className="form-control"  />
				</div>
				<div class="form-group col-12 col-sm-12 col-md-12 col-lg-4">
					<input type="text" name="prenom" placeholder="Prénom" className="form-control"  />
				</div>
				<div class="form-group col-12 col-sm-12 col-md-12 col-lg-4">
					
					<input type="text" placeholder='Email'name="email" className="form-control"  />
					
				</div>
			</div>

			<div class="row">
				<div class="form-group col-12 col-sm-12 col-md-12 col-lg-12">
                    <input type="text" name="objec
                    t" placeholder="Objet de votre message" className="form-control"  />
				</div>
			</div>

			<div class="row">
				<div class="form-group col-12 col-sm-12 col-md-12 col-lg-12 messageContact">
					<textarea className="form-control messageContact" placeholder="Votre message"></textarea>
				</div>
			</div>

			<div class="row">
				<div class="form-group contactSubmitButton">
					<button className="btn buttonRed">Envoyer</button>
				</div>
			</div>
	</div>
    )
}

export default Contact