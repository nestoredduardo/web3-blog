type ButtonProps = {
  styles?: string
}

const Button: React.FC<ButtonProps> = ({ children, styles }) => {
  return (
    <button
      className={
        'rounded-2xl bg-gradient-to-r from-primary to-secondary font-semibold text-white hover:animate-bg-animation hover:bg-[length:200%_200%] hover:text-black ' +
        styles
      }
    >
      {children}
    </button>
  )
}

export default Button
