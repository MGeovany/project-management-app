import * as React from "react"
import PropTypes from "prop-types"
import { useTheme, styled } from "@mui/material/styles"
import Popper from "@mui/material/Popper"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import CloseIcon from "@mui/icons-material/Close"
import DoneIcon from "@mui/icons-material/Done"
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete"
import ButtonBase from "@mui/material/ButtonBase"
import InputBase from "@mui/material/InputBase"
import Box from "@mui/material/Box"

import { useEffect } from "react"
import participantsApi from "../../api/participantsApi"

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: `1px solid  ${theme.palette.mode === "light" ? " #eaecef" : "#30363d"}`,
      '&[aria-selected="true"]': {
        backgroundColor: "transparent"
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]: {
        backgroundColor: theme.palette.action.hover
      }
    }
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative"
  }
}))

function PopperComponent(props) {
  const { disablePortal, anchorEl, open, ...other } = props
  return <StyledAutocompletePopper {...other} />
}

PopperComponent.propTypes = {
  anchorEl: PropTypes.any,
  disablePortal: PropTypes.bool,
  open: PropTypes.bool.isRequired
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === "light" ? "#e1e4e8" : "#30363d"}`,
  boxShadow: `0 8px 24px ${theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"}`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === "light" ? "#24292e" : "#c9d1d9",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128"
}))

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",
  borderBottom: `1px solid ${theme.palette.mode === "light" ? "#eaecef" : "#30363d"}`,
  "& input": {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#0d1117",
    padding: 8,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: `1px solid ${theme.palette.mode === "light" ? "#eaecef" : "#30363d"}`,
    fontSize: 14,
    "&:focus": {
      boxShadow: `0px 0px 0px 3px ${theme.palette.mode === "light" ? "rgba(3, 102, 214, 0.3)" : "rgb(12, 45, 107)"}`,
      borderColor: theme.palette.mode === "light" ? "#0366d6" : "#388bfd"
    }
  }
}))

const Button = styled(ButtonBase)(({ theme }) => ({
  fontSize: 13,
  width: "100%",
  textAlign: "left",
  paddingBottom: 12,
  color: theme.palette.mode === "light" ? "#586069" : "#8b949e",
  fontWeight: 600,
  "&:hover,&:focus": {
    color: theme.palette.mode === "light" ? "#0366d6" : "#58a6ff"
  },
  "& span": {
    width: "100%"
  },
  "& svg": {
    width: 16,
    height: 16
  }
}))

export default function UserFilter({ boardId, taskId, participants, onUpdateParticipants }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [users, setUsers] = React.useState([])
  const [value, setValue] = React.useState(participants)
  const [pendingValue, setPendingValue] = React.useState(participants)
  const theme = useTheme()

  useEffect(() => {
    const getBoard = async () => {
      try {
        const res = await participantsApi.getAll()
        setUsers(res)
      } catch (err) {
        console.log(err)
      }
    }
    getBoard()
  }, [])

  useEffect(() => {
    onUpdateParticipants(value.map((a) => a.id))
  }, [value])

  const handleClick = (event) => {
    setPendingValue(value)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setValue(pendingValue)
    if (anchorEl) {
      anchorEl.focus()
    }
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "github-label" : undefined

  return (
    <React.Fragment>
      <Box sx={{ width: 221, fontSize: 14 }}>
        <Button disableRipple aria-describedby={id} onClick={handleClick}>
          <span>👩🏼‍💻👨🏼‍💻Users:</span>
          <PersonAddIcon />
        </Button>
        {value.map((label, idx) => (
          <Box
            key={idx}
            sx={{
              mt: "3px",
              height: 20,
              padding: ".15em 4px 0px",
              fontWeight: 600,
              lineHeight: "15px",
              borderRadius: "2px"
            }}
            style={{
              backgroundColor: "#39424a",
              color: theme.palette.getContrastText("#39424a")
            }}>
            {label.username}
          </Box>
        ))}
      </Box>
      <StyledPopper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Box
              sx={{
                borderBottom: `1px solid ${theme.palette.mode === "light" ? "#eaecef" : "#30363d"}`,
                padding: "8px 10px 0px",
                fontWeight: 600
              }}>
              Search the user to add to the list
            </Box>
            <Autocomplete
              open
              multiple
              onClose={(event, reason) => {
                if (reason === "escape") {
                  handleClose()
                }
              }}
              value={pendingValue}
              onChange={(event, newValue, reason) => {
                if (event.type === "keydown" && event.key === "Backspace" && reason === "removeOption") {
                  return
                }
                setPendingValue(newValue)
              }}
              disableCloseOnSelect
              PopperComponent={PopperComponent}
              renderTags={() => null}
              noOptionsText="No labels"
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Box
                    component={DoneIcon}
                    sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                    style={{
                      visibility: selected ? "visible" : "hidden"
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      width: 14,
                      height: 14,
                      flexShrink: 0,
                      borderRadius: "3px",
                      mr: 1,
                      mt: "2px"
                    }}
                    style={{ backgroundColor: "#03c3f0" }}
                  />
                  <Box
                    sx={{
                      flexGrow: 1,
                      "& span": {
                        color: theme.palette.mode === "light" ? "#586069" : "#8b949e"
                      }
                    }}>
                    {option.username}
                    <br />
                    <span>ID: {option.id}</span>
                  </Box>
                  <Box
                    component={CloseIcon}
                    sx={{ opacity: 0.6, width: 18, height: 18 }}
                    style={{
                      visibility: selected ? "visible" : "hidden"
                    }}
                  />
                </li>
              )}
              options={[...users].sort((a, b) => {
                // Display the selected users first.
                let ai = value.indexOf(a)
                ai = ai === -1 ? value.length + value?.indexOf(a) : ai
                let bi = value.indexOf(b)
                bi = bi === -1 ? value.length + value?.indexOf(b) : bi
                return ai - bi
              })}
              getOptionLabel={(option) => option.username}
              renderInput={(params) => (
                <StyledInput ref={params.InputProps.ref} inputProps={params.inputProps} autoFocus placeholder="Filter users" />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
    </React.Fragment>
  )
}

const labels = [
  {
    name: "Marlon Castro",
    id: "321312321313"
  },
  {
    name: "Randel Dev",
    id: "2312313123213"
  },
  {
    name: "Josue Playa",
    id: "421441241242"
  }
]
