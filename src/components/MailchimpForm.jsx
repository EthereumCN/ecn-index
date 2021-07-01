import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Input, Button, Box, Text, Link ,Flex} from "@chakra-ui/core"
import { GiRss } from "react-icons/gi"
export default class MyGatsbyComponent extends React.Component {
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).
  constructor() {
    super()
    this.state = { email: "", result: { result: null } }
  }

  // 2. via `async/await`
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({ result: result })
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <>
        <form
          onSubmit={this._handleSubmit}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Flex flexWrap="nowrap">
          <label>
            <Input
              display="inline-block"
              w="300px"
              label="Email"
              type="email"
              name="email"
              variant="outline"
              placeholder="邮箱地址"
              autoComplete="email"
              onChange={this.handleChange}
              borderRadius="0"
              borderTopLeftRadius="0.5rem"
              borderBottomLeftRadius="0.5rem"
              border="2px solid  #ee771c !important"
              _focus={{ boxShadow: "0" }}
              color="#fff"
              backgroundColor="transparent"
              _placeholder={{ color: "#fff" }}
            />
          </label>
          <Box display="flex" flexDir="column">
            {/* <Button
            ml="0.8rem"
              _active={{ bg: "#ee771c" }}
              leftIcon="email"
              _hover={{ bg: "#ee771c" }}
              backgroundColor="#ee771c"
              color="#fff"
              variant="solid"
              label="Submit"
              type="submit"
            >
              {this.state.result.result === "success"
                ? "订阅成功"
                : this.state.result.result === "error"
                ? "已订阅"
                : this.state.result.result === null
                ? " 订阅"
                : "请再点一次"}
            </Button> */}

            {this.state.result.result === "success" ? (
              <Button
                // ml="0.8rem"
                _active={{ bg: "rgba(238,119,28,0.8)" }}
                leftIcon="check"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="rgba(238,119,28,0.8)"
                color="#000"
                variant="solid"
                label="Submit"
                type="submit"
                borderRadius="0"
                borderTopRightRadius="0.5rem"
                borderBottomRightRadius="0.5rem"
              >
                {" "}
                订阅成功
              </Button>
            ) : this.state.result.result === "error" ? (
              <Button
                // ml="0.8rem"
                _active={{ bg: "rgba(238,119,28,0.8)" }}
                leftIcon="warning-2"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="rgba(238,119,28,0.8)"
                color="#000"
                variant="solid"
                label="Submit"
                type="submit"
                borderRadius="0"
                borderTopRightRadius="0.5rem"
                borderBottomRightRadius="0.5rem"
              >
                {" "}
                已订阅
              </Button>
            ) : this.state.result.result === null ? (
              <Button
                // ml="0.8rem"
                _active={{ bg: "#ee771c" }}
                // leftIcon="email"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="#ee771c"
                color="#000"
                variant="solid"
                label="Submit"
                type="submit"
                borderRadius="0"
                borderTopRightRadius="0.5rem"
                borderBottomRightRadius="0.5rem"
                border="2px solid #ee771c !important"
              >
                {" "}
                订阅
              </Button>
            ) : (
              "请再点一次"
            )}
          </Box>
          </Flex>
        </form>
      </>
    )
  }
}
