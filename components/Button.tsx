type ButtonProps = {
  styles?: string
}

const Button: React.FC<ButtonProps> = ({ children, styles }) => {
  return (
    <button
      className={
        'rounded-2xl bg-gradient-to-r from-primary to-secondary font-semibold text-white hover:bg-[length:200%_200%] ' +
        styles
      }
    >
      {children}
    </button>
  )
}

export default Button
