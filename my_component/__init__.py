import streamlit as st
import streamlit.components.v1 as components

_my_component = components.declare_component(
    "my_component",
    url="http://localhost:3001",
)


def my_component(greeting, name="Streamlit", key=None):
    return _my_component(greeting=greeting, name=name, key=key, default=0)


st.title("Component tutorial!")

num_clicks = my_component("Ahoy", "Streamlit")
st.write("Number of clicks:", num_clicks)
