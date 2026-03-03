import React from "react";
import { DiscussionEmbed } from "disqus-react";

export default function DisqusComments({ config }) {
  return <DiscussionEmbed shortname="joelworrall-com" config={config} />;
}
