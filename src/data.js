export const status = [
  {
    Name: "Backlog",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="#1f5cb7"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
      </svg>
    ),
  },
  {
    Name: "Todo",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="#1f55b2"
      >
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
      </svg>
    ),
  },
  {
    Name: "In progress",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="#d7d00f"
      >
        <style></style>
        <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
      </svg>
    ),
  },
  {
    Name: "Done",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="#274e90"
      >
        <style></style>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
      </svg>
    ),
  },
  {
    Name: "Cancel",
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="gray"
      >
        <style></style>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
      </svg>
    ),
  },
];

export const GroupingPriority = [
  {
    Name: "No priority ",
    Number: 0,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512 "
        fill="gray"
      >
        <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
      </svg>
    ),
  },
  {
    Name: "Urgent",
    Number: 4,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="#e46d0c"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
      </svg>
    ),
  },
  {
    Name: "High ",
    Number: 3,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 48 48"
        id="network"
        fill="gray"
      >
        <path d="M4 44h40V4z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </svg>
    ),
  },

  {
    Name: "Medium ",
    Number: 2,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        id="signal-cellular-bar"
        fill="gray"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path fillOpacity=".3" d="M2 22h20V2L2 22z"></path>
        <path d="M17 7L2 22h15V7z"></path>
      </svg>
    ),
  },

  {
    Name: "Low ",
    Number: 1,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        id="signal-cellular-bar"
        fill="gray"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path fillOpacity=".3" d="M2 22h20V2L2 22z"></path>
        <path d="M12 12 2 22h10V12z"></path>
      </svg>
    ),
  },
];

//

export const OrderingPriority = [
  {
    Name: "Urgent",
    Number: 4,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="#e46d0c"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
      </svg>
    ),
  },
  {
    Name: "High ",
    Number: 3,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 48 48"
        id="network"
        fill="gray"
      >
        <path d="M4 44h40V4z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
      </svg>
    ),
  },
  {
    Name: "Medium ",
    Number: 2,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        id="signal-cellular-bar"
        fill="gray"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path fillOpacity=".3" d="M2 22h20V2L2 22z"></path>
        <path d="M17 7L2 22h15V7z"></path>
      </svg>
    ),
  },
  {
    Name: "Low ",
    Number: 1,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        id="signal-cellular-bar"
        fill="gray"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path fillOpacity=".3" d="M2 22h20V2L2 22z"></path>
        <path d="M12 12 2 22h10V12z"></path>
      </svg>
    ),
  },

  {
    Name: "No priority ",
    Number: 0,
    Icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512 "
        fill="gray"
      >
        <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
      </svg>
    ),
  },
];
