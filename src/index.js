import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import {
  Icon,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemHeading,
  ListItemContent,
  Link,
  ProgressButton,
  ToggleContent
} from './components';

import './lists.scss';

const initialState = [
  {
    initial: true,
    loading: false,
    success: false,
    error: false
  },
  {
    initial: true,
    loading: false,
    success: false,
    error: false
  }
];
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return state.map((item, index) => {
        if (index !== action.index) {
          return item;
        }
        return {
          ...item,
          ...action.payload
        };
      });
  }
};
const progressOne = {
  initial: false,
  loading: true,
  success: false,
  error: false
};
const progressTwo = {
  initial: false,
  loading: true,
  success: false,
  error: false
};
const progressSuccess = {
  initial: false,
  loading: false,
  success: true,
  error: false
};
const progressError = {
  initial: false,
  loading: false,
  success: false,
  error: true
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="l-main">
      <div className="container l-main__container">
        <h1>List prototypes</h1>

        <h2>Standard List</h2>
        <List>
          <ListItem>
            <ListItemText>Item 1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Item 2</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Item 3</ListItemText>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">inline list</h2>
        <List inline>
          <ListItem>
            <ListItemText>Item 1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Item 2</ListItemText>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">icon list</h2>
        <List>
          <ListItem
            margin={{
              bottom: 2
            }}
          >
            <ListItemIcon>
              <Icon className="fa fa-user" />
            </ListItemIcon>
            <ListItemText>Item 1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Icon className="fa fa-user" />
            </ListItemIcon>
            <ListItemText>Item 2</ListItemText>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">border list</h2>
        <List border>
          <ListItem>
            <ListItemText>Item 1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Item 2</ListItemText>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">bullet list</h2>
        <List bullet>
          <ListItem>
            <ListItemText>Item 1</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Item 2</ListItemText>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">bullet icon link list</h2>
        <List bullet>
          <ListItem>
            <ListItemContent>
              <ListItemIcon>
                <Icon className="fa fa-user" />
              </ListItemIcon>
              <Link href="/test">Item 1</Link>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent>
              <ListItemIcon>
                <Icon className="fa fa-user" />
              </ListItemIcon>
              <Link href="/test">Item 2</Link>
            </ListItemContent>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">link list with blocks of content</h2>
        <List bullet>
          <ListItem margin={{ bottom: 3 }}>
            <ListItemContent column margin={{ bottom: 3 }}>
              <ListItemHeading>Heading 1</ListItemHeading>
              <ListItemText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                totam porro, doloremque excepturi, consequatur hic quibusdam,
                delectus recusandae ducimus dolor sed similique? Doloribus
                architecto magni tempora, veniam fuga velit nesciunt.
              </ListItemText>
            </ListItemContent>
            <Link href="/test">Item 1</Link>
          </ListItem>
          <ListItem>
            <ListItemContent column margin={{ bottom: 3 }}>
              <ListItemHeading>Heading 2</ListItemHeading>
              <ListItemText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                totam porro, doloremque excepturi, consequatur hic quibusdam,
                delectus recusandae ducimus dolor sed similique? Doloribus
                architecto magni tempora, veniam fuga velit nesciunt.
              </ListItemText>
            </ListItemContent>
            <Link href="/test">Item 2</Link>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">bordered link list</h2>
        <List border>
          <ListItem>
            <Link href="/test">Item 1</Link>
          </ListItem>
          <ListItem>
            <Link href="/test">Item 2</Link>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">bordered link button list</h2>
        <List border>
          <ListItem button>
            <Link href="/test">Item 1</Link>
          </ListItem>
          <ListItem button>
            <Link href="/test">Item 2</Link>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">bordered link button list with chevrons</h2>
        <List border>
          <ListItem button>
            <Link href="/test">
              Item 1
              <ListItemIcon>
                <Icon className="fa fa-chevron-right" />
              </ListItemIcon>
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/test">
              Item 2
              <ListItemIcon>
                <Icon className="fa fa-chevron-right" />
              </ListItemIcon>
            </Link>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">detail list</h2>
        <List border>
          <ListItem>
            <ListItemIcon>
              <Icon className="fa fa-user" />
            </ListItemIcon>
            <ListItemContent spaceBetween>
              <ListItemText>List Item 1</ListItemText>
              <ListItemText>$100</ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent spaceBetween>
              <ListItemText>List Item 2</ListItemText>
              <ListItemText bold medium>
                $200
              </ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent spaceBetween>
              <ListItemText>List Item 2</ListItemText>
              <ListItemText bold large>
                $200
              </ListItemText>
            </ListItemContent>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">detail list block (stacks in mobile)</h2>
        <List border block>
          <ListItem>
            <ListItemContent spaceBetween>
              <ListItemText>List Item 1</ListItemText>
              <ListItemText>$100</ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent spaceBetween>
              <ListItemText>List Item 2</ListItemText>
              <ListItemText>$200</ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent spaceBetween>
              <ListItemText>List Item 2</ListItemText>
              <Link href="/test">Item 1</Link>
            </ListItemContent>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">action list</h2>
        <List action border>
          <ListItem>
            <ListItemContent verticalCenter>
              <ListItemIcon large>
                <Icon className="fa fa-file" />
              </ListItemIcon>
              <ListItemHeading>Certificate of Currency</ListItemHeading>
            </ListItemContent>
            <ListItemIcon large>
              <Link href="/">
                <Icon className="fa fa-download" />
              </Link>
            </ListItemIcon>
          </ListItem>

          <ListItem>
            <ListItemContent>
              <ListItemIcon large>
                <Icon className="fa fa-file" />
              </ListItemIcon>
              <ListItemContent column margin={{ bottom: 3 }}>
                <ListItemHeading>Certificate of Currency</ListItemHeading>
                <ListItemText>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum non commodi, quas ex, deleniti voluptate quo
                    nulla sunt ea assumenda exercitationem ducimus
                    necessitatibus blanditiis numquam! Sit odio minus nesciunt
                    exercitationem?
                  </p>
                </ListItemText>
                <ToggleContent buttonText="Document Inclusions">
                  <p>Some toggleable hidden by default content</p>
                </ToggleContent>
              </ListItemContent>
            </ListItemContent>
            <ListItemIcon large>
              <Link href="/">
                <Icon className="fa fa-download" />
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>

        <List action border>
          <ListItem>
            <ListItemContent verticalCenter>
              <ListItemIcon large>
                <Icon className="fa fa-file" />
              </ListItemIcon>
              <ListItemHeading>Certificate of Currency</ListItemHeading>
            </ListItemContent>
            <ProgressButton
              animation={state[0]}
              onClick={() => {
                dispatch({ type: 'UPDATE', payload: progressOne, index: 0 });
                setTimeout(() => {
                  dispatch({
                    type: 'UPDATE',
                    payload: progressSuccess,
                    index: 0
                  });
                }, 1000);
              }}
            >
              Download
            </ProgressButton>
          </ListItem>
        </List>

        <List action border>
          <ListItem>
            <ListItemContent verticalCenter>
              <ListItemIcon large>
                <Icon className="fa fa-file" />
              </ListItemIcon>
              <ListItemHeading>Certificate of Currency</ListItemHeading>
            </ListItemContent>
            <ProgressButton
              animation={state[1]}
              onClick={() => {
                dispatch({ type: 'UPDATE', payload: progressTwo, index: 1 });
                setTimeout(() => {
                  dispatch({
                    type: 'UPDATE',
                    payload: progressError,
                    index: 1
                  });
                }, 1000);
              }}
            >
              Download
            </ProgressButton>
          </ListItem>

          <ListItem>
            <ListItemContent>
              <ListItemIcon large>
                <Icon className="fa fa-file" />
              </ListItemIcon>
              <ListItemContent column>
                <ListItemHeading>Certificate of Currency</ListItemHeading>
                <ListItemHeading secondary>
                  Policy Ammendment - Issued on August 2018
                </ListItemHeading>
                <ListItemText>
                  A Certificate of Currency document is often requested by...
                </ListItemText>
                <ToggleContent buttonText="Document Inclusions">
                  <p>Some toggleable hidden by default content</p>
                </ToggleContent>
              </ListItemContent>
            </ListItemContent>
            <ListItemIcon large>
              <Link href="/">
                <Icon className="fa fa-download" />
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">action list date variant</h2>
        <List action border>
          <ListItem>
            <ListItemText bold margin={{ right: 6 }}>
              MAR 2018
            </ListItemText>
            <ListItemContent column>
              <ListItemHeading>Tax Invoice</ListItemHeading>
              <ListItemHeading secondary>
                Policy Ammendment - Issued on August 2018
              </ListItemHeading>
              <ListItemText>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  expedita animi rerum omnis iste saepe, nihil harum quia nobis
                  quod laudantium deleniti maiores labore nam unde dolorum et
                  soluta provident.
                </p>
              </ListItemText>
            </ListItemContent>
            <Link href="">
              <Icon className="fa fa-pencil-alt" /> edit
            </Link>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">action list stack on mobile</h2>
        <List action border block>
          <ListItem>
            <ListItemIcon large>
              <Icon className="fa fa-file" />
            </ListItemIcon>
            <ListItemContent column>
              <ListItemHeading>Certificate of Currency</ListItemHeading>
              <ListItemText>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  expedita animi rerum omnis iste saepe, nihil harum quia nobis
                  quod laudantium deleniti maiores labore nam unde dolorum et
                  soluta provident.
                </p>
              </ListItemText>
            </ListItemContent>
            <ListItemIcon large>
              <Link href="/">
                <Icon className="fa fa-download" />
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>

        <h2 className="u-mar-t--6">schedule of loss example</h2>
        <List action border>
          <ListItem>
            <ListItemContent column>
              <ListItemHeading>Samsung TV</ListItemHeading>
              <ListItemText>
                <p>
                  Television (Consumer Electrical) - 55" 4K UHD Smart LED TV
                  NU7100
                </p>
              </ListItemText>
              <ListItemContent>
                <Link href="/">Edit details</Link>&nbsp;
                <Link href="/">Attach files</Link>
              </ListItemContent>
            </ListItemContent>
            <ListItemIcon>
              <Link href="/">
                <Icon className="fa fa-trash" /> Remove
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
