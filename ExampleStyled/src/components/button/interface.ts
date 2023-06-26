export type MyButtonVariant = 'default' | 'action' | 'error'

export interface MyButtonBaseProps {
   variant?: MyButtonVariant;
}

export interface MyButtonContainerProps extends MyButtonBaseProps{
   onPress: () => void;
}

export interface MyButtonProps extends MyButtonContainerProps {
   title: string,
}