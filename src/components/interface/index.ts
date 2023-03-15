/** @format */

export interface GlobalPropsI {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  header?: string;
  showHeader?: boolean;
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

export interface CardPropsI {
  name?: string;
  className?: string;
  description: string;
  linkLabel: string;
  imgUrl: string;
  link?: string;
}

export interface InputPropsI {
  label?: string;
  id?: string;
  htmlFor?: string;
  type?: string;
  inputValue?: string;
  placeHolder?: string;
  containerStyles?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextAreaPropsI {
  label?: string;
  id?: string;
  htmlFor?: string;
  type?: string;
  placeHolder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export interface SelectPropsI {
  id?: string;
  defaultValue: string;
  itemsList: string[];
  label?: string;
  labelStyles?: string;
  containerStyles?: string;
}

export interface FeedBackPropsI {
  feedbackImage: string;
}
