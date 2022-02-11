- `useParams` in TS with desctructuring
const { token } = useParams<{token?: string}>();

https://stackoverflow.com/questions/64517983/useparams-in-typescript-does-not-allow-destructuring


`destructuring`
background: ${({ bg }:{bg:string}) => bg || "#fff"};


`{children}`

 children: JSX.Element[] | JSX.Element





ErrorLog

#1
Compiled with problems:X

ERROR in src/components/Posts/Posts.tsx:36:6

TS2769: No overload matches this call.


#2
typescript cannot find namespacetypescript by Sparkling Spider on Jun 08 2021 Comment

` in tsconfig file which should be:
"module": "commonjs"
`


#3
Type number trivially inferred from a number literal, remove type annotation   