import React from "react";
import PropTypes from 'prop-types'

export const ThirdComponent = ({name, LastName, card}) => {



    return(
        <div>
            <h2>Counicación entre componentes</h2>
            <ul>
                <li>{name}</li>
                <li>{LastName}</li>
                <li>{card.height}</li>
            </ul>
        </div>
    )

}

ThirdComponent.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    card: PropTypes.object
  }
