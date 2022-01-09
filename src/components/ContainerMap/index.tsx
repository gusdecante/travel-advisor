import { HTMLProps, Component } from "react";

interface ContainerMapProps extends HTMLProps<HTMLDivElement> {
  lat: number;
  lng: number;
}

export default class ContainerMap extends Component<
  ContainerMapProps & HTMLProps<HTMLDivElement>,
  {}
> {
  render() {
    return <div {...this.props} />;
  }
}
