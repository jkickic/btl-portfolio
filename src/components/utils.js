import reactStringReplace from "react-string-replace"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import cheerio from "cheerio"

/**
 * //TODO fix this util... 🤦‍♂️
 */

const replaceBr = text => {
  return reactStringReplace(text, /(<br\/>)/g, (match, i) => {
    return <br />
  })
}

const replaceH2 = text => {
  return reactStringReplace(text, /(<h2>.*?<\/h2>)/g, (match, i) => {
    const txt = cheerio.load(match)("h2").text()
    return <h2>{txt}</h2>
  })
}

const replaceItalic = text => {
  return reactStringReplace(text, /(<i>.*?<\/i>)/g, (match, i) => {
    const txt = cheerio.load(match)("i").text()
    return <i>{txt}</i>
  })
}

const replaceBold = text => {
  return reactStringReplace(text, /(<b>.*?<\/b>)/g, (match, i) => {
    const txt = cheerio.load(match)("b").text()
    return <b>{txt}</b>
  })
}

export const magic = text => {
  let replacedSimpleTags = replaceH2(
    replaceBr(replaceItalic(replaceBold(text)))
  )
  return reactStringReplace(replacedSimpleTags, /(<a.*?<\/a>)/g, (match, i) => {
    const $a = cheerio.load(match)("a")
    const href = $a.attr("href")
    const target = $a.attr("target")
    const txt = $a.text()
    return (
      <OutboundLink target={target} href={href}>
        {txt}
      </OutboundLink>
    )
  })
}
