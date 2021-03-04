import { makeStyles } from "@material-ui/core"


export const useGetStylishButtonStyles = (props) => {
    const useStyles = makeStyles( theme => {
        return({
            getStylishButton: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                fontFamily: 'Poiret One',
                letterSpacing: "1px",
                fontSize: "18px", 
                fontWeight: 900,
                marginTop: "30px",
                padding: '0 30px',
                borderRadius: 3,
                color: 'white',
                height: 48,
                border: 0,
              },
        })
    })
    return useStyles()
}