import React from "react"
import { Box, PseudoBox, Text, Heading, AspectRatioBox } from "@chakra-ui/core"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import videoDealogModule from "./videoDialog.module.css"
import Paper from "@material-ui/core/Paper"
import Draggable from "react-draggable"
import { AiOutlinePlayCircle } from "react-icons/ai"
import Img from "gatsby-image"

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  )
}

const EachVideo = ({ data, swip }) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {/* 单个视频 */}
      <Box className={videoDealogModule.video} onClick={handleClickOpen}>
        <PseudoBox
          as="img"
          src={data.cover.childImageSharp.fluid.src}
          alt={data.title}
        />
        <Box className={videoDealogModule.overlay} w="90%">
          <AiOutlinePlayCircle
            className={videoDealogModule.playicon}
            style={{ fontSize: "calc(2vw + 2vh)", color: "#fff" }}
          />
          <Heading
            color="#fff"
            style={{ textOverflow: "ellipsis" }}
            overflow="hidden"
            whiteSpace="nowrap"
            fontSize={swip == 1 ? "calc(0.8vw + 0.5vh)" : "calc(1vw + 1vh)"}
          >
            {data.title}
          </Heading>
          <Text
            style={{ textOverflow: "ellipsis" }}
            overflow="hidden"
            whiteSpace="nowrap"
            color="#ccc"
            fontSize={swip == 1 ? "calc(0.5vw + 0.5vh)" : "calc(0.5vw + 1vh)"}
          >
            {data.author} &#9679; {data.date}
          </Text>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {data.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <AspectRatioBox
              width={["300px", "460px", "560px", "1200px"]}
              h="90vh"
              ratio={1}
              p="0px"
            >
              <Box
                as="iframe"
                allowFullScreen="true"
                framespacing="0"
                frameborder="no"
                border="0"
                scrolling="no"
                src={data.videoSource}
              />
            </AspectRatioBox>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EachVideo
