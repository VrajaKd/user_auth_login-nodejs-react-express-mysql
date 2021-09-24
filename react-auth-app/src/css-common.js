export const styles = {
  appBar: {
    backgroundColor: "primary",
    align: "right",
    height: "50px",
    '& .MuiToolbar-regular': {
      minHeight: "50px"
    }
  },
  name: {
    color: "#dbdbdb",
  },
  link: {
    textTransform: "unset",
    color: "#dbdbdb",
    margin: "0 20px",
    textDecoration: "unset",

    "&:hover": {
     color: "#f1f1f1",
    }
  },
  logo: {
    textTransform: "unset",
    color: "#dbdbdb",
    margin: "0 20px",
    textDecoration: "unset",
  },
  rightToolbar: {
    marginLeft: "auto",
    marginRight: 10
  },
  middleContainer: {
    paddingTop: 40,
    width: 500
  }
}