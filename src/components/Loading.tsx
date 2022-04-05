const Icon = () => <>⏳</>;

interface LoadingProps {
  showIcon?: boolean;
}
/**
 * Loading Component
 * @params showIcon: boolean
 * @returns {JSX.Element}
 */
const Loading = ({ showIcon = false }: LoadingProps) => {
  return <span role={"alert"}>{showIcon && <Icon />} Loading...</span>;
};
export default Loading;
