type ButtonProps = {
  styles?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ children, styles, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        'rounded-2xl bg-gradient-to-r from-primary to-secondary py-2 px-4 font-semibold text-white hover:animate-bg-animation hover:bg-[length:200%_200%] hover:text-black lg:text-lg ' +
        styles
      }
    >
      {children}
    </button>
  )
}

export default Button
