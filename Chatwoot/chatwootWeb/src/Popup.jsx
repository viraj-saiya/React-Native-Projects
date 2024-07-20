
import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
const Popup=()=> {
    return (
        <Dialog open={true}>
          <DialogTitle id="simple-dialog-title">Sign in</DialogTitle>
          <div>
            <List>
              <ListItem button >
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#eee" }}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      height="30"
                      alt="G"
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Sign in with Google" />
              </ListItem>
            </List>
          </div>
        </Dialog>
      );
}


export default Popup;


